<?php include_once('includes/_header.php'); ?>

<header>
	<h1>Music Grid</h1>

	<p>This is a CSS attempt to show a grid of chords in a table with only CSS.</p>
	<p>Javascript should not be used for display, but maybe to generate html Code.</p>
	<p>here is an exemple : "<a href="sample.php">Manhã de Carnaval</a>" composed by Luiz Bonfa.</p>


</header>

<section>
	<h2>What could we do with it ?</h2>
	<table class="mg-music-grid">
		<thead>
			<tr>
				<th colspan="100%">
					Dividing grid with consistent order :
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<figure>1</figure>
				</td>
				<th></th>
				<td data-mg-rythm="2/2">
					<figure>1</figure>
					<figure>2</figure>
				</td>
			</tr>
		</tbody>
		<tbody>
			<tr>
				<td data-mg-rythm="1/2">
					<figure>1</figure>
					<figure>2</figure>
				</td>
				<td data-mg-rythm="2/1">
					<figure>1</figure>
					<figure>2</figure>
				</td>
				<td data-mg-rythm="1/1/1">
					<figure>1</figure>
					<figure>2</figure>
					<figure>3</figure>
				</td>
			</tr>
		</tbody>
		<tbody>
			<tr>
				<td data-mg-rythm="2/1/1">
					<figure>1</figure>
					<figure>2</figure>
					<figure>3</figure>
				</td>
				<td data-mg-rythm="1/2/1">
					<figure>1</figure>
					<figure>2</figure>
					<figure>3</figure>
				</td>
				<td data-mg-rythm="1/1/2">
					<figure>1</figure>
					<figure>2</figure>
					<figure>3</figure>
				</td>
				<td data-mg-rythm="1/1/1/1">
					<figure>1</figure>
					<figure>2</figure>
					<figure>3</figure>
					<figure>4</figure>
				</td>
			</tr>
		</tbody>
	</table>
</section>
<nav>
	<a class="button" href="grid-generator.php">Create a new grid</a>
</nav>
<?php include_once('includes/_footer.php'); ?>
