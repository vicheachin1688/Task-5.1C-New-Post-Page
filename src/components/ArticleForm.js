import React, { useState } from 'react';

import { Segment, Header, Message, Form, TextArea, Button } from "semantic-ui-react";
function ArticleForm(){
    const [title, setTitle]= useState('');
    const [abstract, setAbstract]= useState('');
    const [articleText, setArticleText]= useState('');
    const [tags, setTags]= useState('');
 return (
    <Segment padded>
      <Header as="h4" dividing>What do you want to ask or share</Header>

      <Message size="tiny">
        This section is designed based on the type of the post. It could be developed by conditional rendering.
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {' '}For post an article, the following section would be appeared.
        </span>
      </Message>

      <Form>
        <Form.Input
          label="Title"
          placeholder="Enter a descriptive title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Form.Field
          control={TextArea}
          label="Abstract"
          placeholder="Enter a 1-paragraph abstract"
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
        />

        <Form.Field
          control={TextArea}
          label="Article Text"
          placeholder="Enter a 1-paragraph abstract"
          value={articleText}
          onChange={(e) => setArticleText(e.target.value)}
        />

        <Form.Input
          label="Tags"
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <Button color="grey">Post</Button>
      </Form>
    </Segment>
  );
}

export default ArticleForm;