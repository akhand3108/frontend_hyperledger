import { useRef, useState } from "react"
import { Card, Form, Button, Alert } from "react-bootstrap"
import CenteredContainer from "./CenteredContainer"

const drug =  {
"productId":"\u0000org.pharma-network.com.pharmanet.drug\u0000Paracetamol\u0000001 \u0000",
"name": "Paracetamol",
"manufacturer": "\u0000org.pharma-network.com.pharmanet.company\u0000MAN001 \u0000",
"manufacturingDate": "02-15-2019",
"expiryDate": "02-15-2021",
"owner": "\u0000org.pharma-network.com.pharmanet.company\u0000MAN001 \u0000", "shipment":"",
"createdAt": "2022-11-17T17:29:37.852Z"
}


const AddToDrug = () => {
  const drugNameRef = useRef()
  const serialNoRef = useRef()
  const mfgDateRef = useRef()
  const expDateRef = useRef()
  const companyCRNRef = useRef()
  const orgRoleRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [curStatus, setCurStatus] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(orgRoleRef.current.value)
  }

  return (
    <>
      <CenteredContainer>
        <Card border="primary" text>
          <Card.Body>
            <h2 className="text-center mb-4">Add Drug</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group id="orgRole">
                <Form.Label>Organizaion Role</Form.Label>

                <Form.Select ref={orgRoleRef} aria-label="Organization Role">
                  <option>Open this select menu</option>
                  <option value="transporter">Transporter</option>
                  <option value="retailer">Retailer</option>
                  <option value="manufacturer">Manufacturer</option>
                  <option value="consumer">Consumer</option>
                  <option value="distributor">Distributor</option>
                </Form.Select>
              </Form.Group>
              <Form.Group id="drugName">
                <Form.Label>Drug Name</Form.Label>
                <Form.Control type="text" ref={drugNameRef} required />
              </Form.Group>
              <Form.Group id="serialNo">
                <Form.Label>Serial Number</Form.Label>
                <Form.Control type="text" ref={serialNoRef} required />
              </Form.Group>
              <Form.Group id="mfgDate">
                <Form.Label>Manufacturing Date</Form.Label>
                <Form.Control type="text" ref={mfgDateRef} required />
              </Form.Group>
              <Form.Group id="expDate">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control type="text" required ref={expDateRef} />
              </Form.Group>
              <Form.Group id="companyCRN">
                <Form.Label>Compnay CRN</Form.Label>
                <Form.Control type="text" required ref={companyCRNRef} />
              </Form.Group>
              <Button className="w-100 mt-3" type="submit">
                Get
              </Button>
            </Form>
          </Card.Body>
        </Card>
      <Alert className="mt-3" variant="success">
      <Alert.Heading>Drug Added</Alert.Heading>
      <p>
        Id: {drug.productId}
        </p>
        <p>
          Name: {drug.name}
        </p>
        <p>Manufacturer:{drug.manufacturer}</p>
        <p>Created At: {drug.createdAt}</p>
      <hr />
      <p className="mb-0">
        Expiry Date : {drug.expiryDate}
      </p>
    </Alert>
      </CenteredContainer>

      
    </>
  )
}

export default AddToDrug
