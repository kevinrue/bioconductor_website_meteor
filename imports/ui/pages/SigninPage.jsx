import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

export const SigninPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
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

  const github_signin_form = useTracker(() => Accounts.loginServicesConfigured() ?
    <Form onSubmit={loginWithGithub}>

      <Segment stacked>

        <Form.Button id="signin-form-github" content="Sign in with GitHub"/>

      </Segment>

    </Form> : '');

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

        </Grid.Column>
      </Grid>
    </Container>
  );
};
