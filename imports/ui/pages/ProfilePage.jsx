import React from 'react'

const ProfilePage = () => {
  const user = useTracker(() => Meteor.user());

  return (
  	<h1>Profile</h1>
  	<ul>
  		<li>
  			<strong>Username:</strong> {user.username}
  			<strong>Password:</strong> ***************
  		</li>
  	</ul>
}

export default HomePage
ProfilePage