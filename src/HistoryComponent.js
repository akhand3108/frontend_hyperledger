
import { useRef, useState } from "react"
import { Card, Form, Button, Alert } from "react-bootstrap"
import CenteredContainer from "./CenteredContainer"

const dummyData = {
  "status": "success",
  "message": "Drug history successfully",
  "drugHistory": [
    {
      "TxId": "82b9aa94cc88fda31d1bf95c32fb1699e6b573f7b218dec2c735ea681a97b786",
      "Timestamp": {
        "seconds": {
          "low": 1668706177,
          "high": 0,
          "unsigned": false
        },
        "nanos": 765000000
      },
      "IsDelete": "false",
      "Value": {
        "productId": "\u0000org.pharma-network.com.pharmanet.drug\u0000Paracetamol\u0000001\u0000",
        "name": "Paracetamol",
        "manufacturer": "\u0000org.pharma-network.com.pharmanet.company\u0000MAN001\u0000",
        "manufacturingDate": "02-15-2019",
        "expiryDate": "02-15-2021",
        "owner": "\u0000org.pharma-network.com.pharmanet.company\u0000MAN001\u0000",
        "shipment": "",
        "createdAt": "2022-11-17T17:29:37.852Z"
      }
    },
    {
      "TxId": "bb1ffad8f051b0544f32cde199c798114afffe018839d06523497e20526e7106",
      "Timestamp": {
        "seconds": {
          "low": 1668706798,
          "high": 0,
          "unsigned": false
        },
        "nanos": 906000000
      },
      "IsDelete": "false",
      "Value": {
        "productId": "\u0000org.pharma-network.com.pharmanet.drug\u0000Paracetamol\u0000001\u0000",
        "name": "Paracetamol",
        "manufacturer": "\u0000org.pharma-network.com.pharmanet.company\u0000MAN001\u0000",
        "manufacturingDate": "02-15-2019",
        "expiryDate": "02-15-2021",
        "owner": "\u0000org.pharma-network.com.pharmanet.company\u0000TRA001\u0000",
        "shipment": "",
        "createdAt": "2022-11-17T17:29:37.852Z"
      }
    },
    {
      "TxId": "782caf54d3c172c96b15e5dd78284fcc4e33bfc37bdfb0be9c53375e0e11894d",
      "Timestamp": {
        "seconds": {
          "low": 1668706869,
          "high": 0,
          "unsigned": false
        },
        "nanos": 359000000
      },
      "IsDelete": "false",
      "Value": {
        "productId": "\u0000org.pharma-network.com.pharmanet.drug\u0000Paracetamol\u0000001\u0000",
        "name": "Paracetamol",
        "manufacturer": "\u0000org.pharma-network.com.pharmanet.company\u0000MAN001\u0000",
        "manufacturingDate": "02-15-2019",
        "expiryDate": "02-15-2021",
        "owner": "\u0000org.pharma-network.com.pharmanet.company\u0000DIST001\u0000",
        "shipment": "\u0000org.pharma-network.com.pharmanet.shipment\u0000DIST001\u0000Paracetamol\u0000",
        "createdAt": "2022-11-17T17:29:37.852Z"
      }
    },
    {
      "TxId": "20184021bdf09913b2096711da66b1bedae44aa6d1b9ab2f1dc91f27f84cf230",
      "Timestamp": {
        "seconds": {
          "low": 1668706926,
          "high": 0,
          "unsigned": false
        },
        "nanos": 766000000
      },
      "IsDelete": "false",
      "Value": {
        "productId": "\u0000org.pharma-network.com.pharmanet.drug\u0000Paracetamol\u0000001\u0000",
        "name": "Paracetamol",
        "manufacturer": "\u0000org.pharma-network.com.pharmanet.company\u0000MAN001\u0000",
        "manufacturingDate": "02-15-2019",
        "expiryDate": "02-15-2021",
        "owner": "\u0000org.pharma-network.com.pharmanet.company\u0000TRA002\u0000",
        "shipment": "\u0000org.pharma-network.com.pharmanet.shipment\u0000DIST001\u0000Paracetamol\u0000",
        "createdAt": "2022-11-17T17:29:37.852Z"
      }
    },
    {
      "TxId": "94fe323e5b76733fbfe7d0c51a79dc44fb671bf22e7a4f71d341c3496a2ebe73",
      "Timestamp": {
        "seconds": {
          "low": 1668706957,
          "high": 0,
          "unsigned": false
        },
        "nanos": 503000000
      },
      "IsDelete": "false",
      "Value": {
        "productId": "\u0000org.pharma-network.com.pharmanet.drug\u0000Paracetamol\u0000001\u0000",
        "name": "Paracetamol",
        "manufacturer": "\u0000org.pharma-network.com.pharmanet.company\u0000MAN001\u0000",
        "manufacturingDate": "02-15-2019",
        "expiryDate": "02-15-2021",
        "owner": "\u0000org.pharma-network.com.pharmanet.company\u0000RET002\u0000",
        "shipment": "\u0000org.pharma-network.com.pharmanet.shipment\u0000RET002\u0000Paracetamol\u0000",
        "createdAt": "2022-11-17T17:29:37.852Z"
      }
    },
    {
      "TxId": "5c3055994621937853cc1d31e7d54d3934623fc1fd8a37a1f1e87b80bb948bb9",
      "Timestamp": {
        "seconds": {
          "low": 1668707012,
          "high": 0,
          "unsigned": false
        },
        "nanos": 547000000
      },
      "IsDelete": "false",
      "Value": {
        "productId": "\u0000org.pharma-network.com.pharmanet.drug\u0000Paracetamol\u0000001\u0000",
        "name": "Paracetamol",
        "manufacturer": "\u0000org.pharma-network.com.pharmanet.company\u0000MAN001\u0000",
        "manufacturingDate": "02-15-2019",
        "expiryDate": "02-15-2021",
        "owner": "Akash",
        "shipment": "\u0000org.pharma-network.com.pharmanet.shipment\u0000RET002\u0000Paracetamol\u0000",
        "createdAt": "2022-11-17T17:29:37.852Z"
      }
    }
  ]
}

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

      {dummyData.drugHistory.map((trans) => {

          let drug = trans.Value;
          return (<>
            <Alert key={trans.TxId} className="mt-3" variant="success">
          <Alert.Heading>Tra</Alert.Heading>
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
          </>)
        })}
    </>
  )
}

export default HistoryComponent
