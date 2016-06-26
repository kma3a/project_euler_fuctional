defmodule SmallDiv do

  def underN(num, upLim) do
    for n <- 1..upLim, do: isDiv(num, n)
  end

  def checkDiv(num, upLim) do
    IO.puts Enum.all?(underN(num, upLim), fn(n) -> n == 0 end)
  end
    

  def isDiv(num, divVar) do
    rem(num, divVar)
  end

end

SmallDiv.checkDiv(2520, 10)

