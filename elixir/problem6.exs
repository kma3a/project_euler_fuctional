defmodule SquareDiff do
  def getDiff(upLim) do
    IO.puts sumSquared(upLim,0) - squareSum(upLim, 0) 
  end

  defp sumSquared(upLim, sum) when upLim == 0 do
    square(sum)
  end

  defp sumSquared(upLim, sum) do
   sumSquared(upLim-1, sum+upLim) 
  end

  defp squareSum(upLim, sum) when upLim == 0 do
    sum
  end

  defp squareSum(upLim, sum) do
    currentSqar = square(upLim)
    squareSum(upLim-1, sum + currentSqar)
  end

  defp square(num) do
    num * num
  end
  
end

SquareDiff.getDiff(100)



