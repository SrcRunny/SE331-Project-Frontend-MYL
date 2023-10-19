<template>
<div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg animate__animated animate__fadeIn">
  <h2 class="text-2xl font-semibold mb-4">Add Student</h2>
  <form>
    <div class="mb-4">
      <label for="studentId" class="block text-sm font-medium text-gray-600">Student ID:</label>
      <input
        type="text"
        id="studentId"
        name="studentId"
        class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
        placeholder="Enter Student ID"
      />
    </div>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-600">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
        placeholder="Enter Name"
      />
    </div>
    <div class="mb-4">
      <label for="surname" class="block text-sm font-medium text-gray-600">Surname:</label>
      <input
        type="text"
        id="surname"
        name="surname"
        class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
        placeholder="Enter Surname"
      />
    </div>
    <div class="mb-4">
      <label for="department" class="block text-sm font-medium text-gray-600">Department:</label>
      <input
        type="text"
        id="department"
        name="department"
        class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
        placeholder="Enter Department"
      />
    </div>
    <div class="mb-4">
      <label for="location" class="block text-sm font-medium text-gray-600">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
        placeholder="Enter Location"
      />
    </div>
    <button
      type="submit"
      class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
    >
      Add Student
    </button>
  </form>
</div>

</template>