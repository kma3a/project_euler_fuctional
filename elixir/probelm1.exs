defmodule MultipleSum do
  def print_sum(int, sum \\ 0) do
    IO.puts calc_sum(int-1, sum)
  end

  defp calc_sum( int, sum) when int <= 0 do
    sum
  end

  defp calc_sum(int, sum) do
    calc_sum(int - 1, add_sum(int, sum))
  end

  defp add_sum(int, sum) do
    if is_multiple(int), do: sum + int, else: sum
  end

  defp is_multiple(num) do
    rem(num, 3) == 0 || rem(num,5) == 0
  end
end

MultipleSum.print_sum(10)
MultipleSum.print_sum(1000)

