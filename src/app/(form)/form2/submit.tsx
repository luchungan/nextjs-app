'use client';

import {  useFormStatus } from "react-dom";

export default function Submit() {
  const {pending} = useFormStatus();
  return <button type="submit">{pending?'submit...':'submit'}</button>;
}