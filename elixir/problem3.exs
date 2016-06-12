defmodule Prime do

  def is_prime(num) do
    check_prime(div(num, 2), num)
  end

  defp check_prime(factor, num) when factor == 1 do
    num
  end

  defp check_prime(factor, num) do
    if rem(num, factor) == 0, do: false, else: check_prime(factor - 1, num)
  end

end

defmodule FindPrimes do

  def print_factors(num) do
    IO.puts find_factors(num, round(:math.sqrt(num)))
  end

  defp find_factors(num, value) when value == 1 do
    num
  end

  defp find_factors(num, value) do
    if (rem(num,value) == 0) do 
      check_prime(num,value)
    else
      find_factors(num, value-1)
    end
  end 

  defp check_prime(num, value) do
    other_val = div(num, value)
    is1_prime = Prime.is_prime(value) != false
    is2_prime = Prime.is_prime(other_val) != false
    cond do
      is1_prime && is2_prime -> return_higher(value, other_val)
      is1_prime -> value
      is2_prime -> other_val
      true -> find_factors(num, value-1)
    end
  end


  defp return_higher(va1, va2) do
    if (va1 > va2), do: va1, else: va2
  end

end


FindPrimes.print_factors(10)
FindPrimes.print_factors(13195)
FindPrimes.print_factors(600851475143)
