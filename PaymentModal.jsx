import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import toast from "react-hot-toast";

export default function PaymentModal({ isOpen, setIsOpen, price, buyNowFunction, clearCart }) {
    function closeModal() {
        setIsOpen(false);
    }

    const launchRazorPay = () => {
        const options = {
            key: "rzp_test_OfAYJ0dWqrCaUY",
            amount: price * 100, // amount in paisa
            currency: "INR",
            name: "Bucephalus",
            description: "Garments Accesories",
            image: "https://media.istockphoto.com/id/1321255356/photo/rack-with-stylish-womens-summer-clothes-concept-for-shopping-store-beauty-fashion.jpg?s=612x612&w=0&k=20&c=hbN6q6tuaPjo7jZFqx57CCLX6XuRo5TEpXmIZMqaShk=",
            handler: function (response) {
                setIsOpen(false);
                toast.success("Order placed successfully");
                buyNowFunction();
                clearCart(); // Clear the cart after successful order placement
            },
            prefill: {
                name: "Bucephalus",
                email: "bucephaluss@gmail.com",
                contact: "9003881034"
            },
            theme: { color: "#252525" }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 overflow-y-auto z-50"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Please make a payment
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Hello Please click on the below button to make a payment.
                                    </p>
                                </div>

                                <div className="w-full mt-4">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                        onClick={launchRazorPay}
                                    >
                                        Pay ₹{price}
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                        onClick={closeModal}
                                    >
                                        Cancel Payment
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}