import { EqualIcon } from "../icons/equal-icon";
import { useState } from "react";
import { UiButtonCalculator } from "./ui-botton-calculator";
import { BackspaceIcon } from "../icons/backspace-icon";

export function UiCalculator() {
  const [result, setResult] = useState(0);
  const [expression, setExpression] = useState(" ");
  return (
    <div className="bg-[#151521] h-[70%] w-[60%] p-5 mx-auto mt-5 rounded-[20px] shadow-xl">
      <div className="m-5 h-5 w-full"></div>
      <div className="flex">
        <EqualIcon className="text-cyan-300 h-20 w-20"></EqualIcon>
        <div className="w-full text-[35pt] font-bold text-white text-right overflow-hidden">
          {result}
        </div>
      </div>
      <div className="w-full border-b-2 border-[#1e1b29]"></div>
      <div className="mt-2 mb-4 w-full text-[25pt] h-[50px] max-h-[50px] font-bold text-white text-right overflow-hidden">
        {expression}
      </div>
      <div className="flex">
        <div className=" grid grid-cols-3 w-[350px] h-[390px]">
          <UiButtonCalculator
            color="cyan"
            onClick={() => {
              setExpression(" ");
              setResult(0);
            }}
          >
            CE
          </UiButtonCalculator>

          <UiButtonCalculator
            color="cyan"
            onClick={() => {
              let copyForDeleteExpression = expression.slice(0, -1);
              setExpression(copyForDeleteExpression);
            }}
          >
            <BackspaceIcon className="h-11 mx-auto mt-3 text-white" />
          </UiButtonCalculator>
          <UiButtonCalculator
            color="cyan"
            onClick={() => {
              console.log(expression);
              let copyExpression = expression;
              if (copyExpression[0] != undefined) {
                if (copyExpression[0] == " ")
                  copyExpression = "-" + copyExpression;
                else copyExpression = expression.slice(1);
              }
              return setExpression(copyExpression);
            }}
          >
            +/-
          </UiButtonCalculator>

          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              setExpression(expression + "7");
            }}
          >
            7
          </UiButtonCalculator>
          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              setExpression(expression + "8");
            }}
          >
            8
          </UiButtonCalculator>
          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              setExpression(expression + "9");
            }}
          >
            9
          </UiButtonCalculator>

          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              setExpression(expression + "4");
            }}
          >
            4
          </UiButtonCalculator>
          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              setExpression(expression + "5");
            }}
          >
            5
          </UiButtonCalculator>
          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              setExpression(expression + "6");
            }}
          >
            6
          </UiButtonCalculator>

          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              setExpression(expression + "1");
            }}
          >
            1
          </UiButtonCalculator>
          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              setExpression(expression + "2");
            }}
          >
            2
          </UiButtonCalculator>
          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              setExpression(expression + "3");
            }}
          >
            3
          </UiButtonCalculator>

          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              if (expression != " 0") {
                setExpression(expression + "0");
              }
            }}
          >
            0
          </UiButtonCalculator>
          <UiButtonCalculator
            color="darkCyan"
            onClick={() => {
              if (expression != " ") {
                if (expression.indexOf(".") == -1) {
                  setExpression(expression + ".");
                }
              }
            }}
          >
            .
          </UiButtonCalculator>
          <UiButtonCalculator
            color="cyan"
            onClick={() => {
              try {
                setResult(eval(expression));
                setExpression(" ");
              } catch {
                setResult("NaN");
                setExpression(" ");
              }
            }}
          >
            =
          </UiButtonCalculator>
        </div>
        <div className="grid grid-cols-1">
          <UiButtonCalculator
            color="cyan"
            onClick={() => {
              setExpression(expression + " / ");
            }}
          >
            /
          </UiButtonCalculator>
          <UiButtonCalculator
            color="cyan"
            onClick={() => {
              setExpression(expression + " * ");
            }}
          >
            *
          </UiButtonCalculator>
          <UiButtonCalculator
            color="cyan"
            onClick={() => {
              setExpression(expression + " - ");
            }}
          >
            -
          </UiButtonCalculator>
          <UiButtonCalculator
            size="big"
            color="cyan"
            onClick={() => {
              setExpression(expression + " + ");
            }}
          >
            +
          </UiButtonCalculator>
        </div>
      </div>
    </div>
  );
}
