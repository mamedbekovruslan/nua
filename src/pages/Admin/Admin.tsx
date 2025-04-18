import styles from "./Admin.module.scss";

const mockUsers = [
  { id: 1, name: "Иван Иванов", email: "ivan@example.com", role: "user" },
  { id: 2, name: "Петр Петров", email: "petr@example.com", role: "admin" },
  {
    id: 3,
    name: "Анна Смирнова",
    email: "anna@example.com",
    role: "moderator",
  },
];

export const Admin = () => {
  return (
    <div className={styles.adminContainer}>
      <h1 className={styles.pageTitle}>Управление пользователями</h1>

      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Email</th>
            <th>Роль</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className={styles.editBtn}>Редактировать</button>
                <button className={styles.deleteBtn}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
