import PropTypes from 'prop-types';
import UserCard from '../UserCard';

export default function UsersList({ users }) {
  return (
    users.length > 0 && users
      .map(({ id, name, email, role }, index) => (
        <UserCard
          key={ index }
          id={ id }
          name={ name }
          email={ email }
          role={ role }
        />
      ))
  );
}

UsersList.propTypes = {
  user: PropTypes.arrayOf({
    id: PropTypes.string,
    name: PropTypes.string,
    password: PropTypes.number,
    role: PropTypes.string,
  }),
}.isRequired;
