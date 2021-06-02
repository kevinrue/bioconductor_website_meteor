import React from 'react';
import { getDisplayName } from '../hooks/useAccount';
 
export const User = ({ user }) => {
  return <li>{ getDisplayName(user) }</li>
};
