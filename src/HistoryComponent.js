import { useRef, useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import CenteredContainer from "./CenteredContainer"

function HistoryComponent() {
  const drugNameRef = useRef()
  const serialNoRef = useRef()
  const orgRoleRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [drugHistory, setDrugHistory] = useState({})

  async function submitHandler(e) {
    e.preventDefault()

    try {
      setLoading(true)
      let params = {
        drugName: drugNameRef.current.value,
        serialNo: serialNoRef.current.value,
        orgRole: orgRoleRef.current.value,
      }
      console.log(params)
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(params),
      }

      const resp = await fetch("localhost:4000/viewHistory", options)
      const data = await resp.json()
      await setDrugHistory(data)
      setLoading(false)
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }

  return (
    <>
      <CenteredContainer>
        <Card border="primary" text>
          <Card.Body>
            <h2 className="text-center mb-4">Get History Of Drug</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group id="drugName">
                <Form.Label>Drug Name</Form.Label>
                <Form.Control type="text" ref={drugNameRef} required />
              </Form.Group>
              <Form.Group id="serialNo">
                <Form.Label>Serial Number</Form.Label>
                <Form.Control type="text" required ref={serialNoRef} />
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

export default HistoryComponent
