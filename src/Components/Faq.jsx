
'use client';

import { Accordion } from 'flowbite-react';

function Faq() {
    return (
        <div className='max-w-screen-xl mx-auto p-5 bg-white min-h-sceen'>
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Accordion>
                <Accordion.Panel className=''>
                    <Accordion.Title>
                    How do I create a account?
                    </Accordion.Title>
                    <Accordion.Content className='w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                            dropdowns, modals, navbars, and more.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out this guide to learn how to&nbsp;
                            <a
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                get started&nbsp;
                            </a>
                            and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>App installation failed, how to update system information?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                            has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the
                            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                Figma design system
                            </a>
                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Website response taking time, how to improve?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                            components, whereas Tailwind UI offers sections of pages.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                            technical reason stopping you from using the best of two worlds.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                            <li>
                                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    Flowbite Pro
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://tailwindui.com/"
                                    rel="nofollow"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    Tailwind UI
                                </a>
                            </li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel className=''>
                    <Accordion.Title>
                        How to Order New Product?
                    </Accordion.Title>
                    <Accordion.Content className='w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                            dropdowns, modals, navbars, and more.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out this guide to learn how to&nbsp;
                            <a
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                get started&nbsp;
                            </a>
                            and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Website Privacy Policy?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                            has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the
                            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                Figma design system
                            </a>
                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
}

export default Faq;