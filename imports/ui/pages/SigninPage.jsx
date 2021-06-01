import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

export const SigninPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password, (err) => {
      // Redirect to profile if there is no log in error
      if (err) {
        setError(err.reason);
        setSuccess(false);
      } else {
        setError('');
        setSuccess(true);
      }
    });
  };

  const loginWithGithub = e => {
    e.preventDefault();

    const res = Meteor.loginWithGithub({
      requestPermissions: []
    }, (error) => {
      if (error) {
        setError(error.reason || 'Unknown error');
        setSuccess(true);
      }
    });

    console.log(res)
  };

  if (success) {
    return <Redirect to='/profile'/>;
  }

  const github_signin_form = Accounts.loginServicesConfigured() ?
    <Form onSubmit={loginWithGithub}>

      <Segment stacked>

        <Form.Button id="signin-form-github" content="Sign in with GitHub"/>

      </Segment>

    </Form> : '';

  return (
    <Container id="signin-page">
      <Grid textAlign="center" verticalAlign="middle" centered>
        <Grid.Column>

          <Header as="h2" textAlign="center">
            Login to your account
          </Header>

          <Form onSubmit={submit}>

            <Segment stacked>

              <Form.Input
                label="Username"
                id="signin-form-username"
                icon="user"
                iconPosition="left"
                name="username"
                type="text"
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
              />
              <br/>
              <Form.Input
                label="Password"
                id="signin-form-password"
                icon="lock"
                iconPosition="left"
                name="password"
                placeholder="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <br/>
              <Form.Button id="signin-form-submit" content="Submit"/>

            </Segment>

          </Form>

          { github_signin_form }

          <Message>
            <Link to="/signup">Click here to Register</Link>
          </Message>

          {error === '' ? (
            ''
          ) : (
            <Message
              error
              header="Login was not successful"
              content={error}
            />
          )}

        </Grid.Column>
      </Grid>
    </Container>
  );
};
