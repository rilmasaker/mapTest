import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
import Button from 'react-bootstrap/Button';

export default function SubmitField({
  className,
  disabled,
  inputRef,
  readOnly,
  text = 'Zaloguj',
  ...props
}) {
  const { error, state } = useForm();

  return (
    <Button
      className={className}
      size="lg"
      variant="secondary"
      ref={inputRef}
      type="submit"
      {...filterDOMProps(props)}
    >
      {text}

    </Button>
  );
}
