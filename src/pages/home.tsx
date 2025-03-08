import { Play } from "@phosphor-icons/react";
import BigPanel from "../components/BigPanel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useEffect, useState } from "react";
import { Cycle } from "../interfaces/Cycle.interface";
import { differenceInSeconds } from "date-fns";

const validationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "Intervalo mínimo precisa ser pelo menos 5 minutos.")
    .max(60, "Intervalo máximo de 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof validationSchema>;

export default function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>("");
  const [amountSecondsPassed, setAmountSencondsPassed] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 5,
    },
  });

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  // const totalSeconds = activeCycle ? activeCycle.minutesAmount : 0;
  // const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  // const minutesAmount = Math.floor(currentSeconds / 60);
  // const secondsAmount = currentSeconds % 60;

  // const minutesFormatted = String(minutesAmount).padStart(2, "0");
  // const secondsFormatted = String(secondsAmount).padStart(2, "0");

  const task = watch("task");
  const amount = watch("minutesAmount");
  const isSubmitDisabled = !task && !amount;

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((prevState) => {
      return [...prevState, newCycle];
    });

    setActiveCycleId(id);

    reset();
  }

  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setAmountSencondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        );
      }, 1000);
    }
  }, [activeCycle]);

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
        <BigPanel
          activeCycle={activeCycle}
          amountSecondsPassed={amountSecondsPassed}
        />
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
