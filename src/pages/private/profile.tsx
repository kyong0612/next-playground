import Layout from "../../components/templates/Layout";
import { VFC } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";

// type UserProfile = {
//   email?: string | null;
//   email_verified?: boolean | null;
//   name?: string | null;
//   nickname?: string | null;
//   picture?: string | null;
//   sub?: string | null;
//   updated_at?: string | null;
//   org_id?: string | null;
//   [key: string]: unknown; // Any custom claim which could be in the profile
// };

const Profile: VFC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);

  if (user)
    return (
      <Layout title="profile">
        <div>
          <Image
            src={user?.picture ?? ""}
            alt={user?.name ?? ""}
            width={100}
            height={100}
          />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      </Layout>
    );

  return (
    <Layout title="unauthorize">
      <Link href="/api/auth/login">
        <a>Please Login</a>
      </Link>
    </Layout>
  );
};

export default Profile;
