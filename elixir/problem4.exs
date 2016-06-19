defmodule Palendrome do

  def check_pal(num) do
    num_to_string = Integer.to_string(num)
    is_pal(num_to_string)
  end

  defp is_pal(num) do
    num == String.reverse(num) 
  end

end


defmodule DigitMult do
  
  def get_nums(num_digits) do
   start_num = 9 * num_digits
   IO.puts gen_nums(start_num, start_num, start_num)
  end

  def gen_nums(num1, num2, start_num) do
    IO.puts num1
    IO.puts num2
    product = num1 * num2
    IO.puts product
    if Palendrome.check_pal(product) do
      product
    else
      new_num1 = num1
      new_num2 = num2
      if rem(num2, 100) == 0 do
        new_num1 = num1 - 1
        num2 = start_num
      end
      gen_nums(new_num1, num2 - 1, start_num)
    end
  end
end

DigitMult.get_nums(111)
