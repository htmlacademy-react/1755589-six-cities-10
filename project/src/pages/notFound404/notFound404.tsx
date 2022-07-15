import { Link } from 'react-router-dom';

function NotFound404 () {
  return (
    <section>
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFound404;
