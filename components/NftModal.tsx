import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import React from "react";

function NftModal({ media, name, description, owner }: any) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        variant="solid"
        colorScheme="blue"
      >
        View Detail
      </Button>
      <Modal isCentered isOpen={isOpen} size="lg" onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader fontWeight="bold" color="black">
            {name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ThirdwebNftMedia metadata={media} className="image" />
            <Text size="md" color="black" fontWeight="bold">
              Description
            </Text>
            <Text color="black" mb="1rem">
              {description}
            </Text>
            <Text size="md" fontWeight="bold" color="black">
              Owner
            </Text>
            <Text color="black" mb="2rem">
              {owner}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} color="black">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NftModal;
