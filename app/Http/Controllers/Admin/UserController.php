<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::latest()->take(5)->get();
        return inertia('Admin/Users/Index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Users/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255|',
            'email' => 'required|max:255|email|ends_with:.com,.co,.net,.org',
        ]);

        if($request->has('password')){
            $validated['password'] = bcrypt($request->password);
        }
        $defaultPassword = bcrypt($validated['name']);

        try {
            User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => $request->has('password') ? $validated['password'] : $defaultPassword,
            ]);

            return redirect(route('users.index'))->with('success', 'User created successfully!');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Failed to create user!');
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::findOrFail($id);
        return inertia('Admin/Users/Edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            // Validasi data
            $validated = $request->validate([
                'name' => 'required|max:255',
                'email' => [
                    'required', 'email', 'max:255', 'ends_with:.com,.co,.net,.org',
                    Rule::unique('users')->ignore($id)
                ],
                'password' => 'nullable|min:8',
            ]);

            // Temukan user dan update
            $user = User::findOrFail($id);
            $updateData = [
                'name' => $validated['name'],
                'email' => $validated['email'],
            ];

            if (!empty($validated['password'])) {
                $updateData['password'] = Hash::make($validated['password']);
            }

            $user->update($updateData);

            // Return respons sukses dengan redirect Inertia
            return redirect(route('users.index'))->with('success', 'User updated successfully');
        } catch (ValidationException $e) {
            // Return error ke frontend
            return back()->withErrors($e->getMessage());
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to update user');
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();

            return redirect()
                ->route('admin.users.index')
                ->with('success', 'User deleted successfully!');

        } catch (\Throwable $th) {
            return redirect()
                ->back()
                ->with('error', 'Failed to delete user!');
        }
    }
}
