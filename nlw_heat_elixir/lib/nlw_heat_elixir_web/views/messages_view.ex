defmodule NlwHeatElixirWeb.MessagesView do
  use NlwHeatElixirWeb, :view

  def render("create.json", %{message: message}) do
    %{
      result: "Message created Bro!",
      message: message
    }
  end
end
