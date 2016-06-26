defmodule SmallDiv do

  def isDiv(num, divVar) do
    rem(num, divVar) == 0
  end

end

SmallDiv.isDiv(10, 5)

