import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function ImgForm() {
    const [image, setImage] = useState({
        link: "",
        title: "",
        description: ""
    });

    
  return (
    <div className='Form'>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image Link</Form.Label>
        <Form.Control value= {image.link} type="link"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image Title</Form.Label>
        <Form.Control value={image.title} type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Why I like this picture</Form.Label>
        <Form.Control value={image.description} as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div>
  );
}

export default ImgForm;