import './App.css'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Vite + React</h1>
      <p className='text-2xl my-4 '>
        this is using vite, react, typescript and tailwind class name
      </p>
      <div className='flex justify-center items-center'>
        <pre className='flex flex-col gap-y-3'>
          <code>
            $ pnpm create vite react-ts-tailwindcss-vite --template react-ts -p
          </code>
          <code>$ pnpm install -D tailwindcss postcss autoprefixer -p</code>
          <code>$ pnpm tailwindcss init -p</code>
        </pre>
      </div>
    </>
  )
}

export default App
