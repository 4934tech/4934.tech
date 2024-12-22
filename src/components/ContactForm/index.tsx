/*
Copyright 2024 Olav "Olavorw" Sharma - 4934 Tech

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use client'

import { useState } from 'react'
import { useActionState } from 'react'             // <-- Server Actions Hook
import { useFormStatus } from 'react-dom'          // <-- Server Actions Hook
import { Switch } from '@headlessui/react'
import { submitContactForm } from '@/lib/mail/submitContactForm'

interface ContactFormProps {
    topOfPage?: boolean
    showTitle?: boolean
}

export default function ContactForm({ topOfPage, showTitle }: ContactFormProps) {
    const [agreed, setAgreed] = useState(false)

    // 1) Set up the server action state for your submitContactForm
    //    Defaulting to { success: false, errors: {} }
    const [state, formAction] = useActionState(submitContactForm, {
        success: false,
        errors: {},
    })

    // 2) Hook from 'react-dom' to track if the action is pending
    const { pending } = useFormStatus()

    return (
        <div
            className={`isolate ${
                topOfPage ? 'px-6 py-24 sm:py-32 lg:px-8' : ''
            }`}
        >
            {showTitle && (
                <div className="mx-auto max-w-2xl text-center">
                    <h2
                        className={`text-balance text-4xl ${
                            topOfPage
                                ? 'font-bold text-5xl sm:text-7xl'
                                : 'font-semibold text-4xl sm:text-5xl'
                        } tracking-tight text-white sm:text-5xl`}
                    >
                        Contact 4934
                    </h2>
                    <p className="mt-8 text-xl/8 font-semibold text-gray-300">
                        If you would like to get in touch with us, please fill out this form.
                    </p>
                </div>
            )}

            {/*
        3) Use the "action" prop on the <form> to tie into the server action
        instead of an onSubmit handler.
      */}
            <form
                action={formAction}
                className={`mx-auto ${
                    showTitle ? 'mt-16 sm:mt-20' : ''
                } max-w-xl`}
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* First Name */}
                    <div>
                        <label
                            htmlFor="first-name"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                required
                                className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
                            />
                        </div>
                        {state.errors?.firstName && (
                            <p className="mt-2 text-sm text-red-500">
                                {state.errors.firstName[0]}
                            </p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div>
                        <label
                            htmlFor="last-name"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
                            />
                        </div>
                        {state.errors?.lastName && (
                            <p className="mt-2 text-sm text-red-500">
                                {state.errors.lastName[0]}
                            </p>
                        )}
                    </div>

                    {/* Company */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="company"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Organization
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
                            />
                        </div>
                        {state.errors?.email && (
                            <p className="mt-2 text-sm text-red-500">
                                {state.errors.email[0]}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm/6 font-semibold text-white"
                        >
                            Message
                        </label>
                        <div className="mt-2.5">
              <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
              />
                        </div>
                        {state.errors?.message && (
                            <p className="mt-2 text-sm text-red-500">
                                {state.errors.message[0]}
                            </p>
                        )}
                    </div>

                    {/* Agreement Switch */}
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-800 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32b7b6] data-[checked]:bg-gradient-to-r data-[checked]:from-[#32b7b6] data-[checked]:to-[#425389]"
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className="size-4 transform rounded-full bg-gray-200 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                />
                            </Switch>
                        </div>
                        <span className="text-sm/6 text-gray-400">
              By selecting this, you agree to our{' '}
                            <a
                                href="https://4934.tech/policies/privacy-policy"
                                className="text-transparent bg-gradient-to-r from-[#32b7b6] to-[#1d243c] bg-clip-text transition-colors"
                            >
                privacy policy
              </a>
              .
            </span>
                    </div>
                </div>

                {/* Submit Button & Success Message */}
                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={!agreed || pending}
                        className="relative w-full overflow-hidden rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32b7b6] transition-all duration-300 ease-in-out group disabled:cursor-not-allowed disabled:opacity-50"
                    >
            <span
                className="absolute inset-0 bg-gradient-to-br from-[#1d6a69] to-[#1d243c] transition-opacity duration-300 ease-in-out group-hover:opacity-0 group-disabled:opacity-100"
            />
                        <span
                            className="absolute inset-0 bg-gradient-to-br from-[#32b7b6] to-[#425389] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-disabled:opacity-0"
                        />
                        <span className="relative z-10">
              {pending ? 'Sending...' : 'Let\'s talk'}
            </span>
                    </button>
                </div>

                {/* Check if state.success is true */}
                {state.success && (
                    <p className="mt-4 text-sm text-green-500 text-center">
                        Thank you for your message. We&apos;ll be in touch soon!
                    </p>
                )}
            </form>
        </div>
    )
}
