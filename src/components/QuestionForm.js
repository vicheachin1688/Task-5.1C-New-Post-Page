import React, { useState } from "react";
import {
  Segment,
  Header,
  Message,
  Form,
  TextArea,
  Button
} from "semantic-ui-react";

function QuestionForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  return (
    <Segment padded>
      <Header as="h4" dividing>
        What do you want to ask or share
      </Header>

      <Message size="tiny">
        This section is designed based on the type of the post. It could be developed by conditional rendering.
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {' '}For post a question, the following section would be appeared.
        </span>
      </Message>

      <Form>
        <Form.Input
          label="Title"
          placeholder="Start your question with how, what, why, etc."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Form.Field
          control={TextArea}
          label="Describe your problem"
          placeholder="Explain your problem in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Form.Input
          label="Tags"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <Button color="grey">Post</Button>
      </Form>
    </Segment>
  );
}

export default QuestionForm;
