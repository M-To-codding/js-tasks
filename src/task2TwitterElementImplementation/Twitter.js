import React, {useEffect, useState} from 'react';
import fetchUser from './fetchUser';


function Twitter(props) {
  let [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(props.username).then((userData) => {
      setUser(userData)
    });
  }, []);

  return props.children(user);
}

// Twitter.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node
//   ])
//   username: PropTypes.String
// };

export default Twitter;