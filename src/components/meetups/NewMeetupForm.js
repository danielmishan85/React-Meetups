import clsses from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm() {
  return (
    <Card>
      <form className={clsses.form}>
        <div className={clsses.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' />
        </div>
        <div className={clsses.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' />
        </div>
        <div className={clsses.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' />
        </div>
        <div className={clsses.control}>
          <label htmlFor='description'>Description</label>
          <textare id='description' required rows='5'></textare>
        </div>
        <div className={clsses.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
