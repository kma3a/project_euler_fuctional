defmodule SmallDiv do

  def getDiv(upLimit) do
    findDiv(upLimit * upLimit, upLimit)
  end

  defp findDiv(startNum, upLim) when startNum >= 100000000000 do
    IO.puts upLim
  end

  defp findDiv(startNum, upLim) do
    if checkDiv(startNum, upLim) do
      IO.puts startNum
    else
      findDiv(startNum + upLim, upLim)
    end
  end

  defp underN(num, upLim) do
    for n <- 1..upLim, do: isDiv(num, n)
  end

  defp checkDiv(num, upLim) do
    Enum.all?(underN(num, upLim), fn(n) -> n == 0 end)
  end
    

  defp isDiv(num, divVar) do
    rem(num, divVar)
  end

end

SmallDiv.getDiv(5)
SmallDiv.getDiv(10)
SmallDiv.getDiv(20)

