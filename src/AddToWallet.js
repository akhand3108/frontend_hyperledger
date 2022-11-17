import { useRef, useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import CenteredContainer from "./CenteredContainer"

const AddToWallet = () => {
  const pubRef = useRef()
  const privRef = useRef()
  const orgRoleRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [curStatus, setCurStatus] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <CenteredContainer>
        <Card border="primary" text>
          <Card.Body>
            <h2 className="text-center mb-4">Add TO wallet</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group id="publicKey">
                <Form.Label>Public Key path</Form.Label>
                <Form.Control type="text" ref={pubRef} required />
              </Form.Group>
              <Form.Group id="privateKey">
                <Form.Label>Private Key Path</Form.Label>
                <Form.Control type="text" required ref={privRef} />
              </Form.Group>
              <Form.Group id="orgRole">
                <Form.Label>Organization Role</Form.Label>
                <Form.Control type="text" required ref={orgRoleRef} />
              </Form.Group>
              <Button className="w-100 mt-3" type="submit">
                Get
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </CenteredContainer>
    </>
  )
}

export default AddToWallet
