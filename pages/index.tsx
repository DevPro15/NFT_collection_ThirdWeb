import { Container, SimpleGrid } from "@chakra-ui/react";
import { useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import NftCard from "../components/NftCard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_COLLECTION_CONTRACT);

  const { data: nfts, isLoading } = useNFTs(contract);

  return (
    <div className={styles.container}>
      <main className="container">
        <h1 className={styles.title}>Welcome to NFT Collection</h1>

        {!isLoading ? (
          <div>
            <Container maxW="container.2xl" centerContent>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
                spacing={5}
                mt={90}
              >
                {nfts?.map((e, i) => (
                  <NftCard
                    key={i}
                    media={e.metadata}
                    name={e.metadata.name}
                    description={e.metadata.description}
                    owner={e.owner}
                  />
                ))}
              </SimpleGrid>
            </Container>
          </div>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </main>
    </div>
  );
};

export default Home;
