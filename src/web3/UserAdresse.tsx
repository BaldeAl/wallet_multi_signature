import {
  useSharedAccountUser1,
  useSharedAccountUser2,
} from "./wagmi.generated";

type UsersAddressesProps = {
  onSelectAddress: (address: string) => void;
};

function UsersAddresses({ onSelectAddress }: UsersAddressesProps) {
  const { data: user1 } = useSharedAccountUser1();
  const { data: user2 } = useSharedAccountUser2();

  return (
    <div>
      <select
        onChange={(e) => onSelectAddress(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="">Sélectionnez un utilisateur</option>
        {user1 && <option value={user1}>Utilisateur 1: {user1}</option>}
        {user2 && <option value={user2}>Utilisateur 2: {user2}</option>}
      </select>
    </div>
  );
}

export default UsersAddresses;
