# Aora

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

### To Run this Project

- Install dependencies

  ```bash
  npm install
  ```

- Start the app

  ```bash
   npx expo start -c
  ```

_In the output, you'll find options to open the app in a_

- [`Expo Go`](https://expo.dev/go), a limited sandbox for trying out app development with Expo

### **project development information :**

- We are using `nativewind` for styling which uses `tailwindcss`.

- If you using `babel` then `babel plugin` automatically wrap your components in `styled()` reducing the required boilerplate.

- In `root` dir added `global.d.ts` file to fix `className` error.
- When you add directory inside `app` directory with parentheses like `(auth)` it's considered as a route group.
- `dynamic route` when you add a file within bracket, like `[query].tsx`.
