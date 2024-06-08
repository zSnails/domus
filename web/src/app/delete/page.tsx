"use client";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { ReactElement, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

function StarIcon(props: any): ReactElement<any, any> {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Page() {
  const providers = [
    {
      name: "John's Plumbing",
      description: "Experienced plumber serving the local community.",
      reviews: "4 (200 reviews)",
    },
    {
      name: "Sarah's Landscaping",
      description: "Lawn care and gardening services.",
      reviews: "5 (140 reviews)",
    },
    {
      name: "Bob's Handyman Services",
      description: "Skilled handyman for all your home repairs.",
      reviews: "4 (160 reviews)",
    },
    {
      name: "Jane's Cleaning Services",
      description: "Reliable and thorough house cleaning.",
      reviews: "5 (180 reviews)",
    },
  ];

  const [getProviders, setProviders] = useState(providers);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter();

  function gotoDetails() {
    router.push("/details");
  }

  function deleteProvider(index: number) {
    console.log("Deleting provider");

    const newProviders = getProviders.filter((_, i) => i !== index);
    setProviders(newProviders);
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Scheduled Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {getProviders.map((provider, index) => (
            <Card key={provider.name}>
              <img
                alt="Provider"
                className="rounded-t-lg object-cover w-full aspect-video"
                height={200}
                src="/placeholder.svg"
                width={300}
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
                <p className="text-gray-600 mb-4">{provider.description}</p>
                <div className="flex items-center space-x-2">
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <span className="text-gray-600">{provider.reviews}</span>
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <Button
                    className="mt-4 w-full"
                    variant="outline"
                    onClick={gotoDetails}
                    color=""
                  >
                    View Details
                  </Button>
                  <Button
                    className="mt-4 w-full bg-red-500 text-gray-100"
                    variant="outline"
                    onClick={onOpen}
                  >
                    Delete
                  </Button>
                  <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    backdrop="transparent"
                    isDismissable = {false}
                    size="sm"
                  >
                    <ModalContent  className="bg-white rounded-xl">
                      <ModalHeader>Cancel Service</ModalHeader>
                      <ModalBody>
                        <p>Are you sure you want to cancel this service?</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button className="mr-2 bg-red-500"
                          onClick={() => {
                            deleteProvider(index);
                            onOpenChange();
                          }}
                        >
                          Yes
                        </Button>
                        <Button variant="outline" onClick={onOpenChange}>No</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
