import { Play } from "@phosphor-icons/react";
import BigPanel from "../components/BigPanel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const validationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "Intervalo mínimo precisa ser pelo menos 5 minutos.")
    .max(60, "Intervalo máximo de 60 minutos."),
});

// interface NewCycleFormData {
//   task: string;
//   minutesAmount: number;
// }

type NewCycleFormData = zod.infer<typeof validationSchema>;

export default function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 5,
    },
  });

  const task = watch("task");
  const amount = watch("minutesAmount");
  const isSubmitDisabled = !task && !amount;

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log("data", data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewCycle)}>
      <div className="flex flex-col w-full h-full items-center justify-center gap-10 md:gap-20">
        <div className="flex w-full max-w-2xl flex-col md:flex-row  items-center justify-between gap-2">
          <label htmlFor="description">Vou trabalhar em</label>
          <input
            id="task"
            placeholder="Dê um nome para o seu projeto"
            className=""
            {...register("task")}
          />
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="minutesAmount">durante</label>
            <input
              id="minutesAmount"
              type="number"
              placeholder="00"
              defaultValue={5}
              step={5}
              min={5}
              max={60}
              className="w-12 text-center border-b"
              {...register("minutesAmount", { valueAsNumber: true })}
            />
            <span>minutos.</span>
          </div>
        </div>
        <BigPanel />
        <div className="flex w-full px-3 justify-center items-center">
          <button
            disabled={isSubmitDisabled}
            className="flex gap-3 w-full max-w-2xl bg-green-800 items-center justify-center"
          >
            <Play size={28} /> Começar
          </button>
        </div>
      </div>
    </form>
  );
}
