"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
//import { Input } from "@/components/ui/input";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { TextArea } from "@/components/ui/text-area";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export function ServiceDetailsPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                alt="Service"
                className="rounded-lg object-cover w-full aspect-[3/2]"
                height={400}
                src="/placeholder.svg"
                width={600}
              />
            </div>
            <div className="grid gap-6">
              <div>
                <h1 className="text-3xl font-bold">Plumbing Services</h1>
                <p className="text-gray-600 mt-2">
                  Experienced plumbers for all your plumbing needs.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">$99 / hour</h2>
                  <div className="flex items-center space-x-2">
                    <StarIcon className="w-5 h-5 fill-yellow-500" />
                    <span className="text-gray-600">5 (200 reviews)</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Our experienced plumbers are dedicated to providing
                  high-quality services for all your plumbing needs. From fixing
                  leaks to installing new fixtures, we have the expertise to get
                  the job done right.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage alt="John Doe" src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-gray-600">Plumber</p>
                  </div>
                </div>
                <Button onClick={onOpen} className="w-full">
                  Book Now{" "}
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent className="bg-white">
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Card Info
                        </ModalHeader>
                        <ModalBody>
                          <form>
                            <Input
                              className="mb-8"
                              label="Card holder name"
                              type="text"
                              name="cardName"
                              variant="underlined"
                            />
                            <Input
                              className="mb-8"
                              label="Card number"
                              type="text"
                              name="cardNumber"
                              variant="underlined"
                            />
                            <Input
                              className="mb-8"
                              label="Expiration date"
                              type="text"
                              name="expiryDate"
                              variant="underlined"
                            />
                            <Input 
                              className="mb-8"
                              label="CVC"
                              type="text"
                              name="cvc"
                              variant="underlined"
                            />
                            <Input
                              className="mb-8"
                              label="Aditional notes (Optional)"
                              type="text"
                              name="amount"
                              variant="faded"
                            />
                          </form>
                        </ModalBody>
                        <ModalFooter>
                          <Button className="mr-2 bg-red-500" onClick={onClose}>
                            Close
                          </Button>
                          <Button className="bg-blue-500" onClick={onClose}>
                            Pay
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Leave A Review
          </h2>
          {/*<ReactStars
                            count={5}
                            size={24}
                            color2={'#ffd700'} />*/}
          <div className="flex items-center mb-4">
            {/* <Input type="text" className="grow" /> */}
            <TextArea></TextArea>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <StarIcon className="w-5 h-5 fill-yellow-500" />
              <StarIcon className="w-5 h-5 fill-yellow-500" />
              <StarIcon className="w-5 h-5 fill-yellow-500" />
              <StarIcon className="w-5 h-5 fill-yellow-500" />
              <StarIcon className="w-5 h-5" />
            </div>
            <Button>Submit</Button>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage alt="Jane Doe" src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Jane Doe</h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <StarIcon className="w-5 h-5 fill-yellow-500" />
                    <span>5</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                The plumber was very professional and did an excellent job
                fixing my leaky faucet. I would definitely use their services
                again.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage alt="John Smith" src="/placeholder-user.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">John Smith</h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <StarIcon className="w-5 h-5 fill-yellow-500" />
                    <span>4</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                The cleaning service was top-notch. They were thorough and left
                my house spotless. I highly recommend them.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage
                    alt="Sarah Johnson"
                    src="/placeholder-user.jpg"
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Sarah Johnson</h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <StarIcon className="w-5 h-5 fill-yellow-500" />
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StarIcon(props: any) {
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
