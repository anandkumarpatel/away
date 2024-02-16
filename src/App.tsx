import 'bootstrap/dist/css/bootstrap.min.css'
import { Suspense } from 'react'
import { Card, Container, Spinner } from 'react-bootstrap'
import './App.css'

function card(title: string, video: string, desc: string, extra: React.ReactNode = null) {
  return (
    <Card className='card'>
      <Card.Title style={{ textAlign: 'center', paddingTop: '10px' }}>{title}</Card.Title>
      <Card.Body>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Suspense fallback={<Spinner />}>
        <video width='100%' height='100%' loop autoPlay controls playsInline>
          <source src={video} />
        </video>
      </Suspense>
      {extra}
    </Card>
  )
}
function getBody(path: string) {
  console.log(path)
  if (path.includes('fruit')) {
    return card('Good Job!', 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_004611934.mp4', 'Way to eat healthy!! 🍎')
  } else if (path.includes('sleep')) {
    return card('It is bedtime!', 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240215_173100281.mp4', 'Time to sleep!! 💤')
  } else if (path.includes('LOTR')) {
    return card('MY PRECIOUS!', 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_004320482.mp4', 'You Finished the Trilogy!! 🧙‍♂')
  } else if (path.includes('miniscreen')) {
    return card('Tv time: Mini screen', 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_004345811.mp4', 'Enjoy watching your show!! 📺')
  } else if (path.includes('valentine')) {
    return card('Valentine Secret', 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_004417088.mp4', 'You will always be my forever valentine!! 💘')
  } else if (path.includes('pantry')) {
    return card(`Whats cooki'in`, 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_004440531.mp4', `Good Look'in! I am sure it will be yummy!! 🍳`)
  } else if (path.includes('crumble')) {
    return card(`Cookie Time!!`, 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_004514235.mp4', `Thanks again for the yummy cookies!! 🍪`)
  } else if (path.includes('fridge')) {
    return card(`Whats for dinner?`, 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_004531851.mp4', `Have a great dinner!! 🍽️`)
  } else if (path.includes('poop')) {
    return card(`Scroll time`, 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_004713561.mp4', `Enjoy your scroll time!! 📱`)
  } else if (path.includes('workout')) {
    return card(`Nice Work!`, 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_165055461.mp4', `Great job on the workout!! 💪`)
  } else if (path.includes('bigscreen')) {
    return card(`Tv Time: Big Screen!`, 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_175611842.mp4', `Enjoy watching your show!! 📺`)
  } else if (path.includes('morning')) {
    return card(`Good Morning!`, 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_175646076.mp4', `Have a great day!! 😁`)
  } else if (path.includes('scrubs')) {
    return card(`Scrubing in!`, 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_175711895.mp4', `Damn, you look great in those scrubs!! 😷`)
  }
  return card(`Good Morning!`, 'https://playbookmna-test.s3.us-east-2.amazonaws.com/PXL_20240216_175646076.mp4', `Have a great day!! 😁`)
}

function App() {
  const urlParams = new URLSearchParams(window.location.search)
  const body = getBody(urlParams.get('page') || '')
  return <Container className='d-flex flex-column max-vh-100 min-vh-100 justify-content-center align-items-center'>{body}</Container>
}

export default App
