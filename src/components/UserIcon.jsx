export default function UserIcon({ user }) {
  if (!user || !user.username) return null;

  return (
    <div className="user-icon">
      {user.username[0].toUpperCase()}
    </div>
  );
}
