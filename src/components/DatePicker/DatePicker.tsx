import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR);

type Props = {
  name: string;
};

export function DateTimePicker({ name }: Props) {
  const { control, setValue } = useFormContext();
  const [initialValue, setInitialValue] = useState<Date | null>(null);

  useEffect(() => {
    // Optionally set an initial value if needed
    const defaultDate = new Date();
    setValue(name, defaultDate.toISOString());
    setInitialValue(defaultDate);
  }, [setValue, name]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          showTimeSelect
          locale="pt-BR"
          dateFormat="Pp"
          selected={value ? new Date(value) : initialValue}
          onChange={(date: Date) => onChange(date ? date.toISOString() : null)}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
        />
      )}
    />
  );
}
