function getBody(path: string) {
  if (path.includes('bedtime')) {
    return <>body</>
  }
  return <>other</>
}
function App() {
  const path = window.location.pathname
  const body = getBody(path)
  return <>{body}</>
}

export default App
