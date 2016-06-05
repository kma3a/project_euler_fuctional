defmodule Fib do

  def print_sequence(num) when num == 1 do
    num
  end

  def print_sequence(num) do
    calc_fib(num)
  end

  def calc_fib(endnum, prevnum \\ 1, nextnum \\ 2, sum \\ 0 )

  def calc_fib(endnum, _, nextnum, sum) when nextnum >= endnum do
    IO.puts sum
  end

  def calc_fib(endnum, prevnum, nextnum, sum) do
    newnext = add_num(prevnum, nextnum)
    newsum =  calc_sum(nextnum, sum)
    calc_fib(endnum, nextnum, newnext, newsum)
  end

  def calc_sum(nextnum, sum) do
    if checkNum(nextnum), do: add_num(nextnum, sum), else: sum
  end


  def checkNum(num) do
    if rem(num, 2) == 0, do: true, else: false
  end

  def add_num(num1, num2)  do
    num1 + num2
  end
end

Fib.print_sequence(4000000)
