import { useState } from "react";
import { Segment, Header, Form, Radio } from "semantic-ui-react";
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

function NewPostPage() {
  const [postType, setPostType] = useState('question');

  return (
    <Segment padded>
      <Header as="h4" dividing> New Post</Header>

      <Form>
        <Form.Group inline>
          <label>Select Post Type:</label>
          <Form.Field>
            <Radio
              label="Question"
              name="postType"
              value="question"
              checked={postType === 'question'}
              onChange={() => setPostType('question')}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Article"
              name="postType"
              value="article"
              checked={postType === 'article'}
              onChange={() => setPostType('article')}
            />
          </Form.Field>
        </Form.Group>
      </Form>

      {postType === 'question' && <QuestionForm />}
      {postType === 'article' && <ArticleForm />}
    </Segment>
  );
}

export default NewPostPage;
