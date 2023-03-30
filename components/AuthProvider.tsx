import { ReactElement, useEffect, useState } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const address = useAddress();

  useEffect(() => {
    if (address) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [address]);

  if (!isLoggedin) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Please login to continue...</h1>
          <ConnectWallet className={styles.connect} />
        </main>
      </div>
    );
  }
  return <>{children}</>;
}
