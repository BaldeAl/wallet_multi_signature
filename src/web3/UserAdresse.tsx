import {
  useSharedAccountUser1,
  useSharedAccountUser2,
} from "./wagmi.generated";

function UsersAddresses() {
  const { data: user1 } = useSharedAccountUser1();
  const { data: user2 } = useSharedAccountUser2();

  return (
    <div className="rounded-md bg-teal-50 text-black">
      <div>
        {user1 && <option value={user1}>Utilisateur 1: {user1}</option>}
      </div>
      <div>
        {user2 && <option value={user2}>Utilisateur 2: {user2}</option>}
      </div>
    </div>
  );
}

export default UsersAddresses;
