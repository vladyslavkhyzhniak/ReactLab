import { Card, Button, Form } from 'react-bootstrap';
import RatingBar from './RatingBar';

function ProfileNew({ id, name, email, birthDate, phone, rating = 0, checked = false, dispatch }) {

  const handleEdit = () => {
    alert(`Edytuj osobę: ${name} (ID: ${id})`);
  };

  return (
    <Card className={`mb-3 me-3 ${checked ? 'border border-3 border-danger' : ''}`} style={{ width: '18rem' }}>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text><strong>Email:</strong> {email}</Card.Text>
        <Card.Text><strong>Data urodzin:</strong> {birthDate}</Card.Text>
        <Card.Text><strong>Telefon:</strong> {phone}</Card.Text>

        <RatingBar rate={rating} />

        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-1">
          <Button
            variant="primary"
            size="sm"
            onClick={handleEdit}
          >
            Edit
          </Button>

          <Form.Check
            type="checkbox"
            label="Check"
            checked={checked}
            onChange={() => dispatch({ type: 'check', id })}
          />

          <Button
            variant="danger"
            size="sm"
            onClick={() => dispatch({ type: 'delete', id })}
          >
            Delete
          </Button>

          <Button
            variant="success"
            size="sm"
            onClick={() => dispatch({ type: 'rate', id, rating })}
          >
            Rate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProfileNew;
