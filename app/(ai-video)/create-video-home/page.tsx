import React from 'react'

const CreateVideo = () => {
  return (
    <main className="max-w-2xl mx-auto flex px-4">
    <div className="py-8">
      <div className="text-4xl font-bold">
        <h1>Generate video from a URL using power of AI</h1>
      </div>
      <form className="grid gap-2">
        <input
        className="bg-transparent text-white border-2 rounded-full px-4 py-2"
        type="url"
        placeholder="https://..."
        />
        <button 
        className="bg-emerald-500 text-white px-4 py-2 rounded-full"
        type="submit"> Create Video</button>
      </form>
    </div>
    <div className="p-8">
      <div className="bg-gray-200 w-[240px] h-[300px]">a</div>
    </div>
  </main>
  )
}

export default CreateVideo